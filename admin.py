from django.contrib import admin

from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "title",
        "company",
        "email",
    )

    search_fields = [
        "name",
        "title",
        "company",
        "email",
    ]