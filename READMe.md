# FinSeek Crypto/Finance Tracking/Reporting Information System

### Concept:

FinSeek System is a online Ledger System that allows the user(s) of the System the ability to create an online financial profile(s) that is in the structure of personal financial statement that is able to track and record the financial information/event(s)/etc... of the user(s)/individual(s). This system will also include several API's that will link to several online API's that will serve as (simulated) financial organizations (such as Stock Trading Exchanges, Crypto Exchanges, Currency Exchanges, etc....) that the user(s) can make financial orders, transactions and events in the user(s) profile. The purpose of this system is to track and record important financial events, financial information and other associated financial entities for later utilization in business decisions, for discovering useful business insights and for financial acccounting purposes.

#####The main features of the application are:

- Project creation and management
- Financial organization/individual(s)/user(s) profile building/development
- Financial organization/individual(s)/user(s) domain for websites/etc....
- Search Functionality and User Login Authentication
- UI features
- CRUD


### Technologies:
###### `Python`
###### `React`
###### `Django`
###### `Django REST`
###### `Postgre SQL`
###### `Bit.io`
###### `HTML`
###### `Javascript`
###### `CSS`
###### `EJS`
###### `AJAX`
###### `Ruby on Rails`
###### `Render`
###### `Netlify`
###### `Tailwind`
###### `Next.js`


#### Project Capstone Deployed Features
[Project Capstone Backend Deployed](https://github.com/marmez11/SEI_Capstone_Finance_Crypto_Backend)
[Project Capstone Frontend Deployed](https://github.com/marmez11/SEI_Capstone_Finance_Crypto_Frontend)

![Project Capstone ERD](https://imgur.com/E9suQXA)

### Daily Plan:

| Day | Goal  | 
| :---:   | :---: |
| 1 | Set up Frontend & Backend Repositories   |
| 2 | Create View(s), Loader(s), Route(s), etc....  |
| 3 | Creating Django Connection(s)..... | 
| 4 | Rendering data to view(s) | 
| 4 | Create Form(s) | 
| 5 | Debugging and Testing | 
| 6 | Styling, Designing, Debugging |
| 7 | Presentation |

### Routes, Loaders and Actions:

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/login_finance" | LOGIN   |  Login to the FinSeek System with user authentication |  login  |
| "/signup_finance" | SIGNUP   |  Signup to the FinSeek System with user authentication |  sign up  |
| "/finance" | GET   |  returns all of the financial profiles/users and all of the information within these profiles/users |  Index/Main  |
| "/finance/:id" | GET   |  returns one of the financial profiles/users and all of the information within one of these profiles/users |  Show  |
| "/finance_create" | POST  |  Create finacial  |  Create  |
| "/finance_update/:id" | Put  |  Update the financial information within one of the financial profiles/users  |  Update  |
| "/finance/:id" | Delete  |  Delete the financial information within one of the financial profiles/users  |  Delete  |

...
Other CRUD routes for the API's and other financial organizations inputted later.....
