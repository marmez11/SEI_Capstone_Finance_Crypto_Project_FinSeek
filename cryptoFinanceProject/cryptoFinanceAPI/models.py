from django.db import models

# Create your models here.

class Crypto_Finance_Videos_Links(models.Model):
    video_name = models.CharField(max_length=100)
    video_url_link = models.CharField(max_length=100)
    finance_org_name = models.CharField(max_length=100)
    finance_org_url_link = models.CharField(max_length=100)

class Crypto_Finance_Individual(models.Model):
    financer_name = models.CharField(max_length=100)
    financer_org = models.CharField(max_length=300)

class Crypto_Finance_Organization(models.Model):
    