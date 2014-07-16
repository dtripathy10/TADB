from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from TADB import settings
from django.views.generic import TemplateView

urlpatterns = patterns('',
    
    url(r'^admin/', include(admin.site.urls)),


    ##Template
    url(r'^$', TemplateView.as_view(template_name='home.html')),
    url(r'^login/$', TemplateView.as_view(template_name='login.html')),
    url(r'^table/$', TemplateView.as_view(template_name='table.html')),
    url(r'^create/$', TemplateView.as_view(template_name='create.html')),

    # static file serve
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root':settings.STATIC_URL}),
)
