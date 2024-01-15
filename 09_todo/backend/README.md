## 1 仮想環境

```sh
cd ./09_todo/backend
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt
```

## 2 Djangoプロジェクト

* プロジェクト作成

```sh
django-admin startproject drf_proj
cd ./drf_proj
python3 manage.py startapp drf_app
```

* migration

```sh
python3 manage.py makemigrations drf_app
python3 manage.py migrate
```

* サーバーの起動

```sh
python3 manage.py runserver
```
