from django.db import models

# Create your models here.

class Survey(models.Model):
    name = models.CharField(max_length=255, null=False)
    age = models.CharField(max_length=255, null=False)

    def __str__(self):
        return "{} - {}".format(self.name, self.age)