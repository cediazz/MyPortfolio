from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth import password_validation
from django.core.exceptions import ValidationError
from rest_framework import serializers


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        exclude = ['user']



class UserSerializer(serializers.ModelSerializer):
    
    user_profile = UserProfileSerializer()
    
    class Meta:
        model = User
        fields = ['username', 'password','first_name','last_name', 'is_staff','is_superuser','user_profile']
    

    def validate_password(self, value):
        try:
            password_validation.validate_password(password=value)
        except ValidationError as e:
            raise serializers.ValidationError(list(e.messages))
        return value
    

    def create(self,validated_data):
        user_profile_data = validated_data.pop('user_profile')
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        UserProfile.objects.create(user = user,**user_profile_data)
        return user
    
    def update(self, instance, validated_data):
        user_profile_data = validated_data.pop('user_profile')
        instance.__dict__.update(validated_data)
        instance.set_password(validated_data['password'])
        instance.save()
        if user_profile_data:
            profile = instance.user_profile
            profile.__dict__.update(user_profile_data)
            profile.save()
        return instance
