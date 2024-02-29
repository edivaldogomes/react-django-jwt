from rest_framework.response import Response
from .models import User
from .serializers import MyTOPS, RegistrationSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ProtectedView(request):
    print("EL REQUEST ES: ",request.user)
    print("EL REQUEST ES: ",request.user.profile.full_name)
    output = f'Welcome {request.user}, Authentication successful'
    return Response({'response': output}, status=status.HTTP_200_OK)

@api_view(['GET'])
def view_all_routes(request):
    data = [
        'user/token/refresh',
        'user/register/',
        'user/token/'
    ]
    return Response(data)




