import cStringIO
import bottle
from bottle import route, run, static_file, redirect, request, response, error
import socket

bottle.debug(True)

HOST = "10.1.1.177"
PORT = 80
s = socket.socket( socket.AF_INET, socket.SOCK_STREAM )
s.connect((HOST, PORT))

response.headers['Content-Type'] = 'application/json'
response.headers['Access-Control-Allow-Origin'] = '*'
response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'


#faz todo o controle de uma tv...
@route('/tv/:id/:action/:opt')
def controlTV(id, action, opt):
	codigoTvArduino = 'tv&' + id
	
	if action == 'volume':
		if opt == 'up':
			print('490')
			#s.send('490')
			#codigoTvArduino + '490')
		elif opt == 'down':
			print('C90')
			#s.send('C90')
			#codigoTvArduino + 'C90')
			
	elif action == 'mudo':
		print('290')
		#s.send('290')
		#codigoTvArduino + '290')
	
	#tem que testar se isso vai ser enviado ao arduino....
	elif action == 'power':
		print('on')
		msg = 'on'
		s.send(msg)
		#codigoTvArduino + 'A90')
	
	elif action == 'canal':
		if opt == 'up':
			print('90')
			#s.send('90')
			#arduino.write(codigoTvArduino + '90')
		elif opt == 'down':
			print('890')
			#s.send('890')
			#arduino.write(codigoTvArduino + '890')	
	
	elif action == 'trocacanal':
		codigoCanal = ''
		#array de codigos dos número do controle remoto que vai de 0 a 9
		codigosNumerosTV = ['910', '10', '810', '410', 'C10', '210', 'A10', '610', 'E10', '110']
		
		#procura pelo índice, onde..
		#pega-se item a item do array do canal digitado..
		for i in range(len(opt)):
			#percorre o array de codigos de TV,procurando pelo indíce do 
			#array corresponde ao numero digitado....
			for w in range(len(codigosNumerosTV)):
				#se o índice do numero digitado é igual ao índice dos codigos, então..
				if i == w:
					#tem-se o codigo a ser enviado ao Arduino...no caso, o código dos canais de tv...
					codigoCanal = codigoCanal+ codigosNumerosTV[ int(opt[i]) ]
		print(codigoCanal)
		#s.send(codigoCanal)

#desliga/liga lampada
@route('/lamp/:id/:opt')
def controlLampada(id, opt):
	codigoLampArduino = 'lamp&' + id
	print(codigoLampArduino)
	
#controle do ar
@route('/ar/:id/:action/:opt')
def controlArCond(id, action, opt):
	codigoArArduino = 'ar&' + id
	
	print(action)
	print(opt)
	if action == 'power':
		if opt == 'on':
			#liga
			print('BF2F1588')
			#s.send('BF2F1588')
			
		elif opt == 'off':
			#desliga
			print('FA36E9A0')
			#s.send('FA36E9A0')
			
	
	elif action == 'trocarModos':
		print('hey')
	
@error(404)
def mistake404(code):
	return "You're in  a wrong place, yo!"
	
@route('/')
def index():
	return 'ok'


# start application
bottle.run(host='localhost', port=8888)
