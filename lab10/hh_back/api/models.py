from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField('')
    city = models.CharField(max_length=100)
    address = models.TextField('')

    def __str__(self):
        return f"{self.name} - {self.city}"
    
    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField('')
    salary = models.FloatField(default=0)
    company = models.ForeignKey(Company, on_delete = models.CASCADE)

    def __str__(self):
        return f"{self.name} -> {self.salary}"    
    
    class Meta:
        verbose_name_plural = 'Vacancies'