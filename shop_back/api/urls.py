from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products, name='get_products'),
    path('products/<int:product_id>/', views.get_product, name='get_product'),
    path('categories/', views.get_categories, name='get_categories'),
    path('categories/<int:category_id>/', views.get_category, name='get_category'),
    path('categories/<int:category_id>/products/', views.get_products_by_category, name='get_products_by_category')
]
