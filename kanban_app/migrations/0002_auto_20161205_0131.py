# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-12-05 01:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kanban_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='created',
        ),
        migrations.AlterField(
            model_name='task',
            name='assignment',
            field=models.CharField(max_length=20),
        ),
    ]