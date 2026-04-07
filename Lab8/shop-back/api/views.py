from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_GET
from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category_id,
        'category': product.category.name,
    }

def category_to_dict(category):
    return {'id': category.id, 'name': category.name}


@require_GET
def product_list(request):
    products = Product.objects.select_related('category').all()
    return JsonResponse([product_to_dict(p) for p in products], safe=False)


@require_GET
def product_detail(request, id):
    product = get_object_or_404(Product.objects.select_related('category'), pk=id)
    return JsonResponse(product_to_dict(product))


@require_GET
def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)


@require_GET
def category_detail(request, id):
    category = get_object_or_404(Category, pk=id)
    return JsonResponse(category_to_dict(category))


@require_GET
def category_products(request, id):
    category = get_object_or_404(Category, pk=id)
    products = Product.objects.select_related('category').filter(category=category)
    return JsonResponse([product_to_dict(p) for p in products], safe=False)

@require_GET
def product_list(request):
    products = Product.objects.select_related('category').all()
    
    # фильтр по диапазону цены
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    sort = request.GET.get('sort')  # 'asc' или 'desc'
    
    if min_price:
        products = products.filter(price__gte=float(min_price))
    if max_price:
        products = products.filter(price__lte=float(max_price))
    if sort == 'asc':
        products = products.order_by('price')
    elif sort == 'desc':
        products = products.order_by('-price')
    
    return JsonResponse([product_to_dict(p) for p in products], safe=False)


@require_GET
def category_products(request, id):
    category = get_object_or_404(Category, pk=id)
    products = Product.objects.select_related('category').filter(category=category)
    
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    sort = request.GET.get('sort')
    
    if min_price:
        products = products.filter(price__gte=float(min_price))
    if max_price:
        products = products.filter(price__lte=float(max_price))
    if sort == 'asc':
        products = products.order_by('price')
    elif sort == 'desc':
        products = products.order_by('-price')
    
    return JsonResponse([product_to_dict(p) for p in products], safe=False)