import {Slots} from './../../models/Slots';
import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {DataShareService} from "../../services/data-share.service";
import {TooltipPosition} from "@angular/material/tooltip";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as _ from 'lodash'
import * as moment from 'moment';
import {AppConstants} from "../../AppConstants";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  contactForm = false;
  showSlots = false
  ContactUs!: FormGroup;

  public timeSlot: any[] = [];
  private slots: any[] = [];
  currentDate: any = moment();
  daysRequired = 6;
  ready = false;

  constructor(private apiService: ApiService, public dataShare: DataShareService, private fb: FormBuilder) {
    this.ContactUs = this.fb.group({
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getSlots();
  }
  clockTheme = {
    container: {
      bodyBackgroundColor: '#fafafa',
      buttonColor: this.dataShare.siteData.custom.global.color
    },
    dial: {
      dialActiveColor: '#fff',
      dialBackgroundColor: this.dataShare.siteData.custom.global.color
    },
    clockFace: {
      clockFaceBackgroundColor: '#f0f0f0',
      clockHandColor: this.dataShare.siteData.custom.global.color,
      clockFaceTimeInactiveColor: this.dataShare.siteData.custom.global.color
    }
  };


  public getSlots() {
    console.log('this is site data', this.dataShare.siteData);
    this.apiService.getSlots().subscribe(data => {
      // console.log('contact div value is true now', this.dataShare.contactDiv);
      const grouped = _.chain(data).groupBy('date').map((value, key) => ({date: key, slots: value})).value();
      this.slots = grouped;
      console.log('slots', this.slots);

      for (const slot of this.slots) {
        slot.mDate = moment(slot.date);
        slot.date = moment(slot.date).format('dddd') + ' ' + moment(slot.date).format('DD.MM');
        for (const mSlot of slot.slots) {
          mSlot.label = moment(mSlot.start).format('HH:mm');
        }
      }
      console.log('these are slots', grouped);
      this.getNextSlots(moment().startOf('day'), false)
    }, error => {
      console.log('error while getting API key', error)
      console.log('error while getting API key', AppConstants.COMPANY_KEY)
    })
  }


  getNextSlots(startDate: any, reverse: boolean): void {
    const mStart = startDate.clone();
    if (reverse) {
      mStart.subtract(6, 'days');
    }
    this.timeSlot = [];
    for (let i = 0; i <= this.daysRequired; i++) {
      const cur = mStart.clone().add(i, 'days').startOf('day');
      this.timeSlot.push({
        day: cur.format('dddd') + ' ' + cur.format('DD.MM'),
        date: cur,
        slots: this.isSlotExists(cur),
      });
      console.log('time slot', this.timeSlot);

    }
    this.ready = true;
  }

  private isSlotExists(date: any) {
    for (const item of this.slots) {
      if (date.isSame(item.mDate, 'day')) {
        return item.slots;
      }
    }
    return [];
  }

  getSlotValue(item: any) {
    console.log('slot value', item);
    this.dataShare.slotsSelected = item;
    this.dataShare.contactMe = false;
    // console.log('contact Me value is false now', this.dataShare.contactMe);
    console.log('slot seletected date', this.dataShare.slotsSelected.date);
    console.log('slot value is selected', moment(this.dataShare.slotsSelected.start).format('hh:mm'));
    console.log('slot value is selected', moment(this.dataShare.slotsSelected.end).format('hh:mm'));
  }


  openContactForm() {
    this.contactForm = !this.contactForm
    this.showSlots = true
    this.dataShare.slotsSelected = undefined
  }

  cancelSlot() {
    this.contactForm = false
    this.showSlots = false
  }

  moveNextTab() {
    if (this.ContactUs.valid) {
      this.onSubmit();
      this.dataShare.index = 1;
      this.dataShare.step.calendar = true;
      setTimeout(() => {
        this.dataShare.index = 2;
      }, 30);
    } else {
      console.log('form field required');
    }
  }
  onSubmit() {
    // check if form is valid
    this.dataShare.contactMe = true;
    this.dataShare.contactForm = this.ContactUs.value;
    this.dataShare.slotsSelected = undefined;
    console.log('form details', this.dataShare.contactForm);
  }

  continueCalendar() {
    const valid = this.contactForm || this.dataShare.slotsSelected
    console.log('valid', valid)
    if (valid) {
      this.dataShare.index = 1;
      this.dataShare.step.calendar = true;
      console.log('this is dataShare step', this.dataShare.step.calendar);
      setTimeout(() => {
        this.dataShare.index = 2;
      }, 30);
    }
  }

  /**
   * @deprecated
   * This function can be used to restrict an input field of text type to accept only number
   * to be used like this onkeypress="return isNumberKey(event)"
   * @param evt Event of key press
   */
  public isNumberKey(evt: any): boolean {
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    return !(charCode !== 46 && charCode > 31
      && (charCode < 48 || charCode > 57));
  }
}

