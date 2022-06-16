import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {DataShareService} from "./services/data-share.service";
import {AppConstants} from "./AppConstants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'whale-customer-app';
  theme = this.dataShare.darkTheme;

  constructor(public api: ApiService, public dataShare: DataShareService) {
    dataShare.prod = AppConstants.prod;
    console.log('Deployed latest v.1.25 calendar done****************',)
  }

  ngOnInit(): void {
    this.api.getSiteData().subscribe((data: any) => {
        // console.log('this is site data ********************************', data)
        this.dataShare.siteData = data;
        this.dataShare.globalData = data.custom.global;

        // console.log('global color',data.custom.global)
        AppConstants.SITE_ID_PROD = data.id;
      }, error => {
        // console.log('an error occurred getting site ***************************', error);
        const id: any = '619f27391bd58f474a230a09'
        AppConstants.SITE_ID_PROD = id;
        this.dataShare.siteData =
          {
            "config": {
              "step1": [
                {
                  "id": 5,
                  "type": "text-box",
                  "title": "Form Half",
                  "icon": "short_text",
                  "class": "col-lg-6 col-sm-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "Label",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "dynamicData": {
                    "uiId": "",
                    "title": "title",
                    "email": false,
                    "value": "",
                    "type": "name",
                    "required": true
                  },
                  "uid": "0.14554934950109466"
                },
                {
                  "id": 10,
                  "type": "heading-text",
                  "title": "Heading Text",
                  "icon": "article",
                  "class": "col-12",
                  "uiData": {
                    "color": " ",
                    "text": "Heading text here",
                    "font": "16px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "uid": "0.4201373310594083"
                },
                {
                  "id": 11,
                  "type": "radio_button",
                  "title": "Radio Button",
                  "icon": "radio_button_checked",
                  "class": "col-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "Your text here",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": true
                  },
                  "dynamicData": {
                    "radioBtn": [
                      {
                        "text": "radio-1",
                        "value": "radio-1",
                        "id": 1,
                        "active": false,
                        "count": 1
                      },
                      {
                        "text": "radio-2",
                        "value": "radio-2",
                        "id": 2,
                        "active": false,
                        "count": 2
                      },
                      {
                        "text": "radio-3",
                        "value": "",
                        "id": 0.7997986680664411,
                        "count": 3,
                        "active": false
                      },
                      {
                        "text": "radio-4",
                        "value": "",
                        "id": 0.9289376270715204,
                        "count": 4,
                        "active": false
                      },
                      {
                        "text": "radio-5",
                        "value": "",
                        "id": 0.21388090760176626,
                        "count": 5,
                        "active": false
                      }
                    ],
                    "required": true,
                    "selectedValue": "radio-1"
                  },
                  "uid": "0.7679792653843773"
                },
                {
                  "id": 8,
                  "type": "check-box",
                  "title": "Check Box",
                  "icon": "check_box",
                  "class": "col-12",
                  "dynamicData": {
                    "links": {
                      "checked": true,
                      "title": "Terms"
                    },
                    "required": true
                  },
                  "uiData": {
                    "color": " ",
                    "text": " Your text here ",
                    "font": "20px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "uid": "0.6777081818877033"
                },
                {
                  "id": 7,
                  "type": "text-box-full",
                  "title": "Form full",
                  "icon": "format_size",
                  "class": "col-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "Placeholder",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "dynamicData": {
                    "uiId": "",
                    "title": "",
                    "value": "",
                    "type": "address",
                    "required": true
                  },
                  "uid": "0.6510791548144719"
                },
                {
                  "id": 6,
                  "type": "text-area",
                  "title": "Text Area",
                  "icon": "reorder",
                  "class": "col-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "placeholder....",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "dynamicData": {
                    "uiId": "",
                    "title": "title",
                    "value": "",
                    "type": "phone",
                    "required": true
                  },
                  "uid": "0.30241548824547415"
                },
                {
                  "id": 1,
                  "type": "mat-option",
                  "title": "Services",
                  "icon": "grading",
                  "class": "col-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": {
                      "text": "Select a Service",
                      "color": "",
                      "font": "18px"
                    },
                    "font": "18px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "title": {
                      "text": "Your title here",
                      "color": "",
                      "font": "18px"
                    },
                    "label": {
                      "text": "Your label",
                      "color": "",
                      "font": "18px"
                    },
                    "selected": false
                  },
                  "uId": "mat-option-1",
                  "uid": "0.8849831567011672"
                },
                {
                  "id": 4,
                  "type": "divider",
                  "title": "Divider",
                  "icon": "horizontal_rule",
                  "class": "col-12",
                  "uiData": {
                    "color": "",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "divider": "divider-4",
                  "uid": "0.5771675180278"
                },
                {
                  "id": 2,
                  "type": "sub-service",
                  "title": "Products",
                  "icon": "post_add",
                  "class": "col-12",
                  "uiData": {
                    "color": "",
                    "text": "Select a sub-service",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "dynamicData": {
                    "active": true,
                    "value": false,
                    "sub_type": "stack"
                  },
                  "uid": "0.009939231298496498"
                }
              ],
              "step3": [
                {
                  "id": 8,
                  "type": "check-box",
                  "title": "Check Box",
                  "icon": "check_box",
                  "class": "col-12",
                  "dynamicData": {
                    "links": {
                      "checked": true,
                      "title": "About"
                    },
                    "required": true
                  },
                  "uiData": {
                    "color": " ",
                    "text": " Your text here ",
                    "font": "20px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "uid": "0.7805133358697931"
                },
                {
                  "id": 11,
                  "type": "radio_button",
                  "title": "Radio Button",
                  "icon": "radio_button_checked",
                  "class": "col-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "Your text here",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": true
                  },
                  "dynamicData": {
                    "radioBtn": [
                      {
                        "text": "radio-1",
                        "value": "radio-1",
                        "id": 1,
                        "active": false,
                        "count": 1
                      },
                      {
                        "text": "radio-2",
                        "value": "radio-2",
                        "id": 2,
                        "active": false,
                        "count": 2
                      },
                      {
                        "text": "radio-3",
                        "value": "",
                        "id": 0.6143833145842996,
                        "count": 2,
                        "active": false
                      },
                      {
                        "text": "radio-4",
                        "value": "",
                        "id": 0.12664062142706412,
                        "count": 2,
                        "active": false
                      },
                      {
                        "text": "radio-5",
                        "value": "",
                        "id": 0.9402813080626273,
                        "count": 2,
                        "active": false
                      },
                      {
                        "text": "radio-6",
                        "value": "",
                        "id": 0.7395723376125083,
                        "count": 2,
                        "active": false
                      }
                    ],
                    "required": true,
                    "selectedValue": "radio-1"
                  },
                  "uid": "0.22869906816536467"
                },
                {
                  "id": 11,
                  "type": "radio_button",
                  "title": "Radio Button",
                  "icon": "radio_button_checked",
                  "class": "col-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "Your text here",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "dynamicData": {
                    "radioBtn": [
                      {
                        "text": "radio-1",
                        "value": "radio-1",
                        "id": 1,
                        "active": false,
                        "count": 1
                      },
                      {
                        "text": "radio-2",
                        "value": "radio-2",
                        "id": 2,
                        "active": false,
                        "count": 2
                      }
                    ],
                    "required": true,
                    "selectedValue": "radio-1"
                  },
                  "uid": "0.13930112162409714"
                },
                {
                  "id": 5,
                  "type": "text-box",
                  "title": "Form Half",
                  "icon": "short_text",
                  "class": "col-lg-6 col-sm-12",
                  "uiData": {
                    "color": "#1d1d1d",
                    "text": "Email",
                    "font": "12px",
                    "italic": false,
                    "underline": false,
                    "bold": false,
                    "font_family": "'Poppins', serif",
                    "selected": false
                  },
                  "dynamicData": {
                    "uiId": "",
                    "title": "email",
                    "email": false,
                    "value": "",
                    "type": "email",
                    "required": true
                  },
                  "uid": "0.5535485700750336"
                }
              ]
            },
            "plan": "1",
            "apps": {
              "calendar": "whale",
              "paytrailAuth": "6pKF4jkv97zmqBJ3ZL8gUw5DfT2NMQ",
              "paytrailMerId": "13466",
              "secret_key": "sk_test_51IDNUGC1xu43sqdR7sdhrPORecaYxq81eGTOPlk1gvVopZXRZ0ZZlrDUANuAInLX2aRkhZyFDhocV6CVBhgUFgK600qCPCYj50",
              "publish_key": "pk_test_51IDNUGC1xu43sqdRpuhskDBC2f0x8XfgP0cOwFPgBbbNRaUQ1tBfS49Lnz38Zh5iJtx3KBzTaQVRHXqWFP0rEGCj0078uGEIH3"
            },
            "custom": {
              "name": "Company name1",
              "email": "test@email.com",
              "phone": "9897966681",
              "address": "Test address",
              "title": "Footer Title Name",
              "brand": "Company name1",
              "desc": "Footer description\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
              "about": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
              "terms": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
              "privacy": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
              "fb": {
                "active": true,
                "link": "https://www.facebook.com/"
              },
              "insta": {
                "active": false,
                "link": ""
              },
              "twitter": {
                "active": false,
                "link": ""
              },
              "logoAsHeader": true,
              "global": {
                "color": "#00cbe6",
                "currency": "€",
                "font": "'Lato', serif"
              }
            },
            "user": {
              "role": "user",
              "keywords": [
                "mayank litcode io",
                "mayank"
              ],
              "_id": "61bd762236e3f42434ecfb11",
              "picture": "https://gravatar.com/avatar/b4b68950b35e6d3723bdea4c159f4bce?d=identicon",
              "name": "mayank",
              "email": "mayank@litcode.io",
              "password": "$2b$09$4KGWmRUU8roCUKnxLmja6uPqb701C6VI.MkldXzHrDUvVuyko5ghy",
              "createdAt": "2021-12-18T05:48:18.460Z",
              "updatedAt": "2021-12-18T05:48:18.460Z",
              "__v": 0
            },
            "createdAt": "2021-11-29T06:30:17.191Z",
            "updatedAt": "2021-12-23T10:34:59.556Z",
            "__v": 0,
            "domain": "mayank.thedogspedia.com",
            "verificationCode": "$2b$04$a8AKuXuddi3923QzZX1Q0u8gF4bNx2IpsGLhB5jaTHQdGI/LGLrJy",
            "verified": true,
            "theme": "1",
            "name": "Company name1",
            "logo": "https://whale-sass.ams3.digitaloceanspaces.com/kxisyb1jb7oaa5p20d/1640254119635-cancel.png",
            "id": "61a4737942f0dfdd56bf9f18"
          }
        console.log('error site data', this.dataShare.siteData)
      }
    )
    // console.log('this is site id', AppConstants.SITE_ID_PROD)
    console.log('this is site id', AppConstants.prod)


  }

  onActivate() {
    window.scroll(0, 0);
  }

}
