$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Customer_Contact_Number_Modification_Functionality.feature");
formatter.feature({
  "name": "Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I Click on Profile Menu",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Update Info",
  "keyword": "And "
});
formatter.step({
  "name": "I Replace the Contact Number to 44555",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify Contact Number is changed to 44555",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Profile Menu",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Update Info",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_update_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Replace the Contact Number to 44555",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_replace_the_contact_number_to(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Contact Number is changed to 44555",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_contact_number_is_changed_to(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/InvalidLoginFunctionality_usingExcel.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "I Enter User Id from row number \"\u003crownumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rownumber"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003derror-msg\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-497JREO\u0027, ip: \u0027192.168.0.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat base.Base.getElementText(Base.java:42)\r\n\tat step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number(InvalidLoginFuctionality_usingExcel.java:54)\r\n\tat ✽.Verify Login Error Message(file:///C:/java/workspace/class39_SkySchool_Frameowrk_Advanced/src/test/resources/features/InvalidLoginFunctionality_usingExcel.feature:12)\r\n",
  "status": "failed"
});
formatter.write("this is my failure message");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login%20Feaature%20Validations.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the Login Error Message \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password",
        "error_message"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "33333",
        "Invalid username or password!"
      ]
    },
    {
      "cells": [
        "kamal@gmail.com",
        "1234",
        "Invalid username or password!"
      ]
    },
    {
      "cells": [
        "kamal@gmail.com",
        "3333",
        "Invalid username or password!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"33333\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"kamal@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d112.0.5615.49)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-497JREO\u0027, ip: \u0027192.168.0.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 112.0.5615.49, chrome: {chromedriverVersion: 112.0.5615.49 (bd2a7bcb881c..., userDataDir: C:\\Users\\asmar\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52543}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 83620cf2c6a4253d8bb0f69d629db1ad\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat base.Base.navigateURL(Base.java:24)\r\n\tat step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com(Customer_Contact_Number_Modification_Functionality.java:20)\r\n\tat ✽.I am in landing page http://it.microtechlimited.com(file:///C:/java/workspace/class39_SkySchool_Frameowrk_Advanced/src/test/resources/features/Login%20Feaature%20Validations.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter User Id as \"kamal@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Enter Password as \"3333\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});