from django.db import models

# Create your models here.

class Crypto_Finance_User_Spouse(models.Model):
    finance_user_name = models.CharField(max_length=300)
    finance_user_birthday = models.DateField()
    finance_user_SSN = models.CharField(max_length=300)
    finance_user_residence_address = models.CharField(max_length=300)
    finance_occupation = models.CharField(max_length=300)
    finance_employer = models.CharField(max_length=300)
    finance_user_year_period_at_employer = models.CharField(max_length=300)

class Crypto_Finance_User_FinInfo(models.Model):
    finance_asset_name = models.CharField(max_length=300)
    finance_asset_financial_value = models.FloatField()
    finance_liabilities_name = models.CharField(max_length=300)
    finance_liabilities_financial_owedvalue = models.FloatField()
    finance_liabiltiies_monthly_payment = models.FloatField()
    finance_credit_card_name = models.CharField(max_length=300)
    finance_credit_card_limit = models.FloatField()
    finance_credit_card_financial_owedvalue = models.FloatField()
    finance_credit_card_monthly_payment = models.FloatField()
    
class Crypto_Finance_currency_exchange(models.Model):
    currency_exchange_org_name = models.CharField(max_length=100)
    currency_exchange_org_url_link = models.CharField(max_length=100)      

class Crypto_Finance_currency_exchange(models.Model):
    currency_exchange_org_name = models.CharField(max_length=100)
    currency_exchange_org_url_link = models.CharField(max_length=100)      



class Crypto_Finance_User_Profile(models.Model):
    finance_user_name = models.CharField(max_length=300)
    finance_user_birthday = models.DateField()
    finance_user_SSN = models.CharField(max_length=300)
    finance_user_residence_address = models.CharField(max_length=300)
    finance_user_residence_selection_own = models.BooleanField()
    finance_user_residence_selection_rent = models.BooleanField()
    finance_user_residence_selection_other = models.BooleanField()
    finance_user_phone_number = models.CharField(max_length=300)
    finance_user_year_period_at_residence_address = models.CharField(max_length=300)
    finance_occupation = models.CharField(max_length=300)
    finance_employer_name = models.CharField(max_length=300)
    finance_user_year_period_at_employer = models.CharField(max_length=300)
    finance_user_phone_number_employer = models.CharField(max_length=300)   
    finance_user_marriage_status = models.BooleanField()
    finance_user_single_status = models.BooleanField()
    finance_user_separated_status = models.BooleanField()
    finance_num_of_dependents = models.IntegerField()
    finance_urls = models.CharField()
    finance_vids = models.CharField()
    financial_info_id = models.ForeignKey(
        Crypto_Finance_User_FinInfo,
        on_delete=models.CASCADE,
        null=False
    )
    spouse_id = models.ForeignKey(
        Crypto_Finance_User_Spouse,
        on_delete=models.CASCADE,
        null=False)
    currency_exchange_id = models.ForeignKey(
        Crypto_Finance_currency_exchange,
        on_delete=models.CASCADE,
        null=False
    )

    



