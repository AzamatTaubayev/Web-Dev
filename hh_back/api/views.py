from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render

# Create your views here.
from django.forms import model_to_dict
from django.http import JsonResponse
from .models import Vacancy, Company


def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)


def get_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        data = {'vacancy': model_to_dict(vacancy)}
        return JsonResponse(data)
    except Vacancy.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=404)


def get_companies(request):
    companies = Company.objects.all()
    data = {'companies': list(companies.values())}
    return JsonResponse(data, safe=False)


def get_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        data = {'companies': model_to_dict(company)}
        return JsonResponse(data)
    except Company.DoesNotExist as error:
        return JsonResponse({'message':str(error)}, status=404)


def get_vacancies_by_company(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
        vacancies = company.vacancies.all()

        data = [{'name': vacancy.name} for vacancy in vacancies]

        return JsonResponse(data, safe=False)
    except Company.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=404)


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    data = [{'name': vacancy.name, 'salary': vacancy.salary} for vacancy in vacancies]
    return JsonResponse(data, safe=False)