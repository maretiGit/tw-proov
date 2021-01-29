import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {ListItem} from '../../model/list.model';

@Component({
  selector: 'tw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ppl: ListItem[];
  firstnameClass = 'fas fa-sort';
  surnameClass = 'fas fa-sort';
  sexClass = 'fas fa-sort';
  dobClass = 'fas fa-sort';
  phoneClass = 'fas fa-sort';
  start = 0;
  end = 10;
  page = 0;
  pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  startPage: 0;
  endPage: 5;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getList();
  }

  click(person: ListItem) {
    this.ppl = this.ppl.map(p => {
      p.id === person.id ? p.isOpen = !p.isOpen : p.isOpen = false;
      return p;
    });
  }

  getList() {
    this.apiService.getList()
      .subscribe(value => {
        this.ppl = value.list.map(p => {
          p.dob = this.getDate(p.personal_code);
          return p;
        });
      });
  }

  getDate(personal_code: number) {
    const dob = this.getYear(personal_code.toString().charAt(0));
    const code = personal_code.toString();
    return dob + code.substr(1, 2) + '.' + code.substr(3, 2) + '.' + code.substr(5, 2);
  }

  getYear(marker: string) {
    switch (marker) {
      case '3' :
        return '19';
      case '4' :
        return '19';
      case '5' :
        return '20';
      case '6' :
        return '20';
    }
  }

  sort(property: string) {
    switch (property) {
      case 'firstname' :
        if (this.firstnameClass === 'fas fa-sort') {
          this.ppl = this.ppl.sort((a, b) => a.firstname.localeCompare(b.firstname));
          this.firstnameClass = 'fas fa-sort-down';
          this.surnameClass = 'fas fa-sort';
          this.sexClass = 'fas fa-sort';
          this.phoneClass = 'fas fa-sort';
          this.dobClass = 'fas fa-sort';
        } else if (this.firstnameClass === 'fas fa-sort-down') {
          this.ppl = this.ppl.reverse();
          this.firstnameClass = 'fas fa-sort-up';
        } else if (this.firstnameClass === 'fas fa-sort-up') {
          this.firstnameClass = 'fas fa-sort';
          this.getList();
        }
        break;
      case 'surname' :
        if (this.surnameClass === 'fas fa-sort') {
          this.ppl = this.ppl.sort((a, b) => a.surname.localeCompare(b.surname));
          this.firstnameClass = 'fas fa-sort';
          this.surnameClass = 'fas fa-sort-down';
          this.sexClass = 'fas fa-sort';
          this.phoneClass = 'fas fa-sort';
          this.dobClass = 'fas fa-sort';
        } else if (this.surnameClass === 'fas fa-sort-down') {
          this.ppl = this.ppl.reverse();
          this.surnameClass = 'fas fa-sort-up';
        } else if (this.surnameClass === 'fas fa-sort-up') {
          this.surnameClass = 'fas fa-sort';
          this.getList();
        }
        break;
      case 'sex' :
        if (this.sexClass === 'fas fa-sort') {
          this.ppl = this.ppl.sort((a, b) => a.sex.localeCompare(b.sex));
          this.sexClass = 'fas fa-sort-down';
          this.firstnameClass = 'fas fa-sort';
          this.surnameClass = 'fas fa-sort';
          this.phoneClass = 'fas fa-sort';
          this.dobClass = 'fas fa-sort';
        } else if (this.sexClass === 'fas fa-sort-down') {
          this.ppl = this.ppl.reverse();
          this.sexClass = 'fas fa-sort-up';
        } else if (this.sexClass === 'fas fa-sort-up') {
          this.sexClass = 'fas fa-sort';
          this.getList();
        }
        break;
      case 'dob' :
        if (this.dobClass === 'fas fa-sort') {
          this.ppl = this.ppl.sort((a, b) => a.dob.localeCompare(b.dob));
          this.dobClass = 'fas fa-sort-down';
          this.surnameClass = 'fas fa-sort';
          this.sexClass = 'fas fa-sort';
          this.phoneClass = 'fas fa-sort';
          this.firstnameClass = 'fas fa-sort';
        } else if (this.dobClass === 'fas fa-sort-down') {
          this.ppl = this.ppl.reverse();
          this.dobClass = 'fas fa-sort-up';
        } else if (this.dobClass === 'fas fa-sort-up') {
          this.dobClass = 'fas fa-sort';
          this.getList();
        }
        break;
      case 'phone' :
        if (this.phoneClass === 'fas fa-sort') {
          this.ppl = this.ppl.sort((a, b) => a.phone.localeCompare(b.phone));
          this.phoneClass = 'fas fa-sort-down';
          this.surnameClass = 'fas fa-sort';
          this.sexClass = 'fas fa-sort';
          this.firstnameClass = 'fas fa-sort';
          this.dobClass = 'fas fa-sort';
        } else if (this.phoneClass === 'fas fa-sort-down') {
          this.ppl = this.ppl.reverse();
          this.phoneClass = 'fas fa-sort-up';
        } else if (this.phoneClass === 'fas fa-sort-up') {
          this.phoneClass = 'fas fa-sort';
          this.getList();
        }
        break;
    }
  }

  movePageBack() {
    if (this.page === 1) {
      return;
    }
    this.setPage(this.page - 1);
  }

  movePageForward() {
    if (this.page === 10) {
      return;
    }
    this.setPage(this.page + 1);
  }

  setPage(no: number) {
    this.page = no;
    this.start = no * 10 - 10;
    this.end = no * 10;
  }
}
