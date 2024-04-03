from django.forms import model_to_dict
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category


def get_products(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)


def get_product(request, product_id):
    product = Product.objects.get(id=product_id)
    data = {'product': model_to_dict(product)}
    return JsonResponse(data)


def get_categories(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def get_category(request, category_id):
    category = Category.objects.get(id=category_id)
    data = {'category': model_to_dict(category)}
    return JsonResponse(data)


def get_products_by_category(request, category_id):
    category = Category.objects.get(id=category_id)
    products = category.product_set.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)
