from django.contrib import admin

from . import models

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email',)
    #search_fields = ('username','first_name', 'last_name', 'email', 'is_staff')

class ProfileAdmin(admin.ModelAdmin):
    list_editable=['verified']
    list_display = ['full_name', 'user', 'verified' ]


admin.site.register(models.User, UserAdmin)
admin.site.register(models.Profile, ProfileAdmin)