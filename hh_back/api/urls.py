from django.urls import path
from . import views

urlpatterns = [
    path('vacancies/', views.get_vacancies, name='get_vacancies'),
    path('vacancies/<int:vacancy_id>/', views.get_vacancy, name='get_vacancy'),
    path('companies/', views.get_companies, name='get_companies'),
    path('companies/<int:company_id>/', views.get_company, name='get_company'),
    path('companies/<int:company_id>/vacancies/', views.get_vacancies_by_company, name='get_vacancies_by_company'),
    path('vacancies/top_ten/', views.top_ten_vacancies, name = 'top_ten_vacancies')
]
