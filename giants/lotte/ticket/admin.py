from django.contrib import admin
from .models import User, Ticket, Game
from import_export.admin import ExportMixin, ExportActionMixin, ImportExportMixin, ImportMixin
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')


class TicketAdmin(ImportExportMixin, admin.ModelAdmin):
    pass


class GameAdmin(ImportExportMixin, admin.ModelAdmin):
    pass


admin.site.register(User, UserAdmin)
admin.site.register(Ticket, TicketAdmin)
admin.site.register(Game, GameAdmin)