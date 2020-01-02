import { Pipe, PipeTransform } from '@angular/core';
import { Tutorial } from 'src/app/core/entities/tutorial/model/tutorial.model';
@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {
  transform(tutorials: Tutorial[], enabledTags: string[]): any {
    if (!enabledTags.length) {
      return tutorials;
    }
    return tutorials.filter(tutorial =>
      tutorial.tags.some(tag => enabledTags.includes(tag))
    );
  }
}
