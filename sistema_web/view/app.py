import os
from os import environ as env
from sys import argv
import bottle
from bottle import route, run, static_file, redirect, request, error


bottle.debug(True)

# static files (js,css,partials) set up

@route('/favicon.ico')
def favicon():
    return static_file('favicon.ico', root='./app/')

@route('/js/:path#.+#')
def server_static(path):
    return static_file(path, root='./app/js/')

@route('/css/:path#.+#')
def server_static(path):
    return static_file(path, root='./app/css/')

@route('/img/:path#.+#')
def server_static(path):
    return static_file(path, root='./app/img/')
	
@route('/fonts/:path#.+#')
def server_static(path):
    return static_file(path, root='./app/fonts/')

@route('/partials/:path#.+#')
def server_static(path):
    return static_file(path, root='./app/partials/')

# this method define the main file, such it is index.html..
@route('/')
@route('/index.html')
def index():
    raise static_file('index.html', root='./app')

@error(404)
def mistake404(code):
    return static_file('404.html', root='./app')

# start application
bottle.run(host='localhost', port=8080)
