import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const Data: User[] = [{id:2,firstName:"Sarajane",lastName:"Brigdale",email:"sbrigdale1@symantec.com",gender:"Female",score:"85680"},
{id:3,firstName:"Meghan",lastName:"Brando",email:"mbrando2@blogs.com",gender:"Female",score:"9"},
{id:4,firstName:"Trev",lastName:"Pennycock",email:"tpennycock3@wordpress.org",gender:"Male",score:"45"},
{id:5,firstName:"Bellina",lastName:"Friatt",email:"bfriatt4@google.ru",gender:"Female",score:"63403"},
{id:6,firstName:"Madelena",lastName:"Dudhill",email:"mdudhill5@yellowbook.com",gender:"Female",score:"26"},
{id:7,firstName:"Damon",lastName:"Rikard",email:"drikard6@yellowbook.com",gender:"Male",score:"2"},
{id:8,firstName:"Maddy",lastName:"Rossey",email:"mrossey7@cbslocal.com",gender:"Female",score:"1456"},
{id:9,firstName:"Rolfe",lastName:"Thorrington",email:"rthorrington8@oaic.gov.au",gender:"Male",score:"19"},
{id:10,firstName:"Meyer",lastName:"Van T'Hoog",email:"mvanthoog9@microsoft.com",gender:"Male",score:"59"},
{id:11,firstName:"Kaila",lastName:"Friberg",email:"kfriberga@state.gov",gender:"Female",score:"621"},
{id:12,firstName:"Annie",lastName:"Gladwell",email:"agladwellb@senate.gov",gender:"Female",score:"78423"},
{id:13,firstName:"Daria",lastName:"Pinkney",email:"dpinkneyc@naver.com",gender:"Female",score:"05594"},
{id:14,firstName:"Gwennie",lastName:"Winterburn",email:"gwinterburnd@newyorker.com",gender:"Female",score:"5"},
{id:15,firstName:"Rianon",lastName:"Georgiades",email:"rgeorgiadese@wordpress.com",gender:"Female",score:"7"},
{id:16,firstName:"Dehlia",lastName:"Casazza",email:"dcasazzaf@deliciousdays.com",gender:"Female",score:"641"},
{id:17,firstName:"Saree",lastName:"Doggett",email:"sdoggettg@marriott.com",gender:"Female",score:"580"},
{id:18,firstName:"Kort",lastName:"Tennant",email:"ktennanth@yahoo.co.jp",gender:"Male",score:"860"},
{id:19,firstName:"Daniel",lastName:"Ivashechkin",email:"divashechkini@creativecommons.org",gender:"Male",score:"437"},
{id:20,firstName:"Herrick",lastName:"Goadby",email:"hgoadbyj@ameblo.jp",gender:"Male",score:"56"}]

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.less']
})
export class LeaderBoardComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['gender','firstName', 'lastName', 'score'];
  dataSource = new MatTableDataSource(Data);

  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  getImageByGender(gender: string) {
    return gender === 'Female' ? '\assets\\female.png' : '\assets\\male.png' 
  }
}

