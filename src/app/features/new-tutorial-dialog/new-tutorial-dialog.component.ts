import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { urlValidator } from 'src/app/shared/directives/newTopicIputValidation/url-validation.directive';
import { DataService } from 'src/app/core/services/data/data.service';
import { map, startWith, filter } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { Tutorial } from 'src/app/core/entities/tutorial/model/tutorial.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-new-tutorial-dialog',
  templateUrl: './new-tutorial-dialog.component.html',
  styleUrls: ['./new-tutorial-dialog.component.less']
})
export class NewTutorialDialogComponent implements OnInit {
  newTutorialForm: FormGroup;
  categoryTags: Set<string> = new Set<string>();
  allCategoryTags$ = this.dataService.getAllTags();
  filteredTags$: Observable<Set<string>>;
  submitClicked = false;
  noCatagoryTagSelected = true;

  constructor(
    public dialogRef: MatDialogRef<NewTutorialDialogComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.newTutorialForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, urlValidator()]),
      description: '',
      category: '',
      level: new FormControl('', Validators.required),
      videoOrText: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.filteredTags$ = combineLatest([
      this.allCategoryTags$,
      this.newTutorialForm.controls.category.valueChanges as Observable<string>
    ]).pipe(
      filter(([tags, value]) => value.length > 0),
      map(([tags, value]) => {
        const lcValue = value.toLocaleLowerCase();
        return new Set<string>(
          tags.filter(tag => tag.toLocaleLowerCase().includes(lcValue))
        );
      })
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(newTutorialData) {
    // Process new tutorial data here
    this.submitClicked = true;
    this.noCatagoryTagSelected = this.categoryTags.size === 0;
    if (this.newTutorialForm.valid && !this.noCatagoryTagSelected) {
      this.categoryTags.add(newTutorialData.level);
      this.categoryTags.add(newTutorialData.videoOrText);
      const newTutorial: Tutorial = this.createTutorial(newTutorialData);
      this.dataService.addNewTutorial(newTutorial);
      this.dialogRef.close();
    }
  }

  addCategoryTag() {
    if (this.newTutorialForm.get('category').value.trim() !== '') {
      this.categoryTags.add(this.newTutorialForm.get('category').value.trim());
      this.noCatagoryTagSelected = false;
    }
    this.newTutorialForm.get('category').setValue('');
  }

  deleteCategoryTag(categoryTag: string) {
    this.categoryTags.delete(categoryTag);
    this.noCatagoryTagSelected = this.categoryTags.size === 0;
  }

  createTutorial(newTutorialData): Tutorial {
    return {
      id: uuid(),
      name: newTutorialData.name,
      url: newTutorialData.url,
      tags: Array.from(this.categoryTags),
      description: newTutorialData.description,
      submitter: { userName: 'user', name: 'jon doe', points: 0 },
      upVote: 0,
      downVote: 0,
      comments: [],
      date: new Date(),
      views: 0
    };
  }

  get f() {
    return this.newTutorialForm.controls;
  }
}
