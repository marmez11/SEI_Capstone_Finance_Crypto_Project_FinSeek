# FinSeek Finance Tracking/Reporting Information System

### Concept:

- FinSeek System is a online Ledger System that allows the user(s) of the System the ability to create an online financial profile(s) that is in the structure of personal financial statement that is able to track and record the financial information/event(s)/etc... of the user(s)/individual(s). 
- This system will include a MongoDB/Mongoose API that will allow the inputting & extracting of financial information (such as financial orders, transactions and events) from various financial entity(s)/organization(s) (such as Stock Trading Exchanges, Crypto Exchanges, Currency Exchanges, etc....).
- The purpose of this application/system is to provide a platform that will allow user(s) to record, input, interact with, view and track important user(s) financial events, financial information and other associated financial entities for later utilization in business decisions, for discovering useful business insights and for financial acccounting purposes.

#####The main features of the application are:

- Project creation and management
- Financial organization/individual(s)/user(s) profile building/development
- Financial organization/individual(s)/user(s) domain for websites/etc....
- Search Functionality and User Login Authentication
- UI features
- CRUD


### Technologies:
###### `HTML`
###### `Javascript`
###### `CSS`
###### `Bulma.js`
###### `Node.js`
###### `Chart.js`
###### `Express`
###### `MongoDB`
###### `Mongoose`
###### `REST`
###### `CRUD`
###### `Render`
###### `Netlify`



#### Project Capstone Deployed Features
[Project Capstone Backend Deployed](https://github.com/marmez11/SEI_Capstone_Finance_Crypto_Project_FinSeek)
[Project Capstone Frontend Deployed](https://github.com/marmez11/SEI_Capstone_Finance_Crypto_Project_FinSeek)

![Project Capstone ERD](https://imgur.com/E9suQXA)

### Daily Plan:

| Day | Goal  | 
| :---:   | :---: |
| 1 | Set up Frontend & Backend Repositories   |
| 2 | Create User Authentication  |
| 3 | Create View(s), Loader(s), Route(s), etc....  |
| 4 | Creating Django Connection(s)..... | 
| 5 | Create CRUD routes  |
| 6 | Rendering data to view(s) | 
| 7 | Create Form(s) | 
| 8 | Create Chart(s) and Visualization(s)  |
| 9 | Debugging and Testing | 
| 10 | Styling, Designing |
| 11 | Presentation |

### Routes, Loaders and Actions:

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/user/login" | LOGIN   |  Login to the FinSeek System with user authentication |  login  |
| "/user/signup" | SIGNUP   |  Signup to the FinSeek System with user authentication |  sign up  |
| "/ledger_index" | GET   |  returns all of the categories of the financial  event(s)/information/etc... that the user(s) input(s)|  Index/Main  |

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/financial_ledger_show" | GET   |  returns all of the instance(s)/id(s) of the User Info Ledger(s) (Basically it gets the user(s) background information)|  Index  |
| "/financial_ledger_show/:id" | GET   |  returns all of the information on individual User Info Ledger(s) background information |  Show  |
| "/financial_ledger_show/:id" | Delete |  delete(s) all of the information on individual User Info Ledger(s) background information |  Delete  |
| "/financial_ledger_show/:id" | Put |  Update(s) all of the information on individual User Info Ledger(s) background information |  Put  |
| "/financial_ledger_show" | Post |  Create(s)/Post new instance(s)/id(s) of the User Info Ledger(s) Background Information into the User Ledger Info Index Page |  Post  |
| "/finance_ledger_new" | New |  Create(s) new instance(s)/id(s) of the User Info Ledger(s) Background Information |  New  |
| "/financial_ledger_edit/:id" | Edit |  Edit(s) all of the information on individual User Info Ledger(s) background information |  Edit  |

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/currency_exchange_show" | GET   |  returns all of the instance(s)/id(s) of the Currency Exchange Information |  Index  |
| "/currency_exchange_show/:id" | GET   |  returns all of the information on individual Currency Exchange information |  Show  |
| "/currency_exchange_show/:id" | Delete |  delete(s) all of the information on individual Currency Exchange(s) background information |  Delete  |
| "/currency_exchange_show/:id" | Put |  Update(s) all of the information on individual Currency Exchange(s) background information |  Put  |
| "/currency_exchange_show" | Post |  Create(s)/Post new instance(s)/id(s) of the Currency Exchange Background Information into the Currency Exchange Index Page |  Post  |
| "/finance_ledger_new" | New |  Create(s) new instance(s)/id(s) of the Currency Exchange(s) Background Information |  New  |
| "/financial_ledger_edit/:id" | Edit |  Edit(s) all of the information on individual Currency Exchange(s) background information |  Edit  |

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/crypto_exchange_show" | GET   |  returns all of the instance(s)/id(s) of the Crypto Exchange Information |  Index  |
| "/crypto_exchange_show/:id" | GET   |  returns all of the information on individual Crypto Exchange information |  Show  |
| "/crypto_exchange_show/:id" | Delete |  delete(s) all of the information on individual Crypto Exchange(s) background information |  Delete  |
| "/crypto_exchange_show/:id" | Put |  Update(s) all of the information on individual Crypto Exchange(s) background information |  Put  |
| "/crypto_exchange_show" | Post |  Create(s)/Post new instance(s)/id(s) of the Crypto Exchange Background Information into the Crypto Exchange Index Page |  Post  |
| "/crypto_exchange_new" | New |  Create(s) new instance(s)/id(s) of the Crypto Exchange(s) Background Information |  New  |
| "/crypto_exchange_edit/:id" | Edit |  Edit(s) all of the information on individual Crypto Exchange(s) background information |  Edit  |

| Path | Method  | Description  | Action  |
| :---:   | :---: | :---: | :---: |
| "/financial_total_show_index" | GET   |  returns all of the information on the totals of financial amount(s) of entities/ |  Index/Main  |
...
Other CRUD routes for the API's and other financial organizations inputted later.....
