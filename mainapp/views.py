from django.shortcuts import render
from .forms import FileForm

def index(request):
    if request.method == 'POST':
        form = FileForm(request.POST, request.FILES)
        if form.is_valid():
            # handle_uploaded_file(request.FILES['file'])
            form.save()
            print('succesful')
    else:
        form = FileForm()
    return render(request, 'mainapp/index.html', {'form': form})