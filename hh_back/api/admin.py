from django.contrib import admin
from . import models


# Register your models here.
@admin.register(models.Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'company', 'salary', ]


admin.site.register(models.Company)