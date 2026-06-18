import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-entity-list',
  templateUrl: './personal-entity-list.component.html',
  styleUrls: ['./personal-entity-list.component.scss']
})
export class PersonalEntityListComponent implements OnInit {

  detailsFlag = false;
  person;

  fsList: {

    customerName: string,
    customerType: string,
    relationshipType: string,
    nationalCode: string,
    registrationDate: number,
    organizationalRole: string,
    personalCode: number,
    banck: string,
    firstName: string,
    lastName: string,
    fatherName: string,
    numberShenasname: number,
    dateShenasname: number,
    seriShenasname: string,
    addadShenasname: number,
    seryalShenasname: number,
    seryalkartMeli: string,
    shenasnameType: string,
    city: string,
    country: string,
    religion: string,
    sect: string,
    residence: string,
    enDate: string,
    enName: string,
    enFatherName: string,
    erjaCode: string,
    eduMaghta: string,
    eduReshte: string,
    eduGraesh: string,
    eduMoaseseType: string,
    eduMoaseseName: string,
    startDate: number,
    endDate: number,
    recruitmentType: string,
    post: string,
    vahed: string,
    sahmie: string,
    tedadFamily: number,
    tedadChild: number,
    tedadKefalat: number,
    contactNumber: string,
    enLastName: string,
    codeHoze: string,
    genderType: string,
    birthDate: number,
    contactsType: string,
    phoneNumber: string,
    contactTypeGroups: string,
    contactStartDate: string,
    contactEndDate: string,
    contactProvince: string,
    contactCity: string,
    nahveTasarofs:string,
    addressDescription: string,
    postalCode:string,
    contactsStartDate: string
    contactsEndDate:string
    region:string,
    eduCity:string,
    mantaghe:string,
    contactTypes:string
  }[] = [
    {
      'customerName': 'پژمان سهرابی',
      'registrationDate': 14000610,
      'contactNumber': '09006489207',
      'customerType': 'حقیقی',
      'relationshipType': 'کارمند',
      'nationalCode': '2235425126',
      'organizationalRole': 'مدیر ارشد فناوری',
      'personalCode': 12400,
      'banck': '1',
      'firstName': 'پژمان',
      'lastName': 'سهرابی',
      'fatherName': 'فریدون',
      'numberShenasname': 2235425126,
      'dateShenasname': 13740503,
      'birthDate': 13740501,
      'seriShenasname': 'د',
      'addadShenasname': 19,
      'seryalShenasname': 625231,
      'seryalkartMeli': '2540502361',
      'shenasnameType': '1',
      'codeHoze': '2',
      'city': '4',
      'country': '1',
      'religion': '1',
      'sect': '1',
      'residence': '1',
      'enDate': '11/07/2003',
      'enName': 'pejman',
      'enLastName': 'sohrabi',
      'enFatherName': 'freydon',
      'erjaCode': '32131',
      'eduMaghta': '2',
      'eduReshte': '1',
      'eduGraesh': '1',
      'eduMoaseseType': 'دولتی',
      'eduMoaseseName': 'دانشگاه تهران',
      'eduCity':'1',
      'startDate': 13940701,
      'endDate': 13981001,
      'recruitmentType': '1',
      'post': '2',
      'vahed': '2',
      'sahmie': 'ندارد',
      'tedadFamily': 4,
      'tedadChild': 2,
      'tedadKefalat': 1,
      'genderType': '1',
      'contactsType': '1',
      'phoneNumber': '09125462518',
      'contactTypeGroups': '3',
      'contactStartDate': '1400/01/02',
      'contactEndDate': '1400/02/02',
      'contactProvince': '3',
      'contactCity': 'شیراز',
      'nahveTasarofs': '1',
      'addressDescription': 'شیراز،بلوار آزادی ، روبروی دریاچه پارک آزادی.',
      'postalCode': '۷۱۳۴۶۸۳۵۱۱',
      'contactsStartDate':'1400/02/01',
      'contactsEndDate':'1400/06/01',
      'region':'4',
      'mantaghe':'4',
      'contactTypes':'1'

    },
    {
      'customerName': 'کامران گیلانی',
      'registrationDate': 14000721,
      'contactNumber': '09016485057',
      'customerType': 'حقیقی',
      'relationshipType': 'کارمند',
      'nationalCode': '4598442678',
      'organizationalRole': 'مدیر عامل',
      'personalCode': 11000,
      'banck': '2',
      'firstName': 'کامران',
      'lastName': 'گیلانی',
      'fatherName': 'سینا',
      'numberShenasname': 4598442678,
      'dateShenasname': 13620503,
      'birthDate': 13620501,
      'seriShenasname': 'ب',
      'addadShenasname': 15,
      'seryalShenasname': 658245,
      'seryalkartMeli': '1250002563',
      'shenasnameType': '1',
      'city': '4',
      'country': '1',
      'religion': '1',
      'sect': '1',
      'residence': '1',
      'enDate': '10/05/2001',
      'enName': 'kamran',
      'enLastName': 'gilani',
      'enFatherName': 'sina',
      'erjaCode': '25468',
      'eduMaghta': '1',
      'eduReshte': '2',
      'eduGraesh': '2',
      'eduMoaseseType': 'دولتی',
      'eduMoaseseName': 'شهید بهشتی',
      'eduCity':'1',
      'startDate': 13740701,
      'endDate': 13781001,
      'recruitmentType': '1',
      'post': '1',
      'vahed': '1',
      'sahmie': 'ندارد',
      'tedadFamily': 5,
      'tedadChild': 3,
      'tedadKefalat': 0,
      'codeHoze': '1',
      'genderType': '1',
      'contactsType': '1',
      'phoneNumber': '07188243562',
      'contactTypeGroups': '2',
      'contactStartDate': '1400/02/22',
      'contactEndDate': '1400/03/22',
      'contactProvince': '3',
      'contactCity': '4',
      'nahveTasarofs': '2',
      'addressDescription': 'شیراز، خیایان ملاصدرا، نرسیده بانک ملت.',
      'postalCode': '۷۱۳۴۶۸۳۵۱۱',
      'contactsStartDate':'1400/01/06',
      'contactsEndDate':'1400/06/01',
      'region':'2',
      'mantaghe':'2',
      'contactTypes':'1'
    },

  ];
  selectedRow: Row;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClose(event: any) {
    if (event === 'close') {
      this.detailsFlag = false;
    }
  }

  selectRow(servise): void {
    this.fsList = servise;
    this.detailsFlag = true;
  }
}

interface Row {
  fullName
  registrationDate
  contactNumber
  fieldOfActivity
  relationshipType
}
