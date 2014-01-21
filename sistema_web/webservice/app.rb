require 'sinatra/base'
$stdout.sync = true

class App < Sinatra::Base
  use Rack::CommonLogger

  #liga/desliga
  get '/tv/status/:opt' do |n|
    "Status: #{n}"
  end
  
  #volume...
  get '/tv/volume/:opt' do |n|
    "Volume: #{n}"
  end
  
  #canal...
  get '/tv/canal/:opt' do |n|
    "Canal: #{n}"
  end
  
  #liga/desliga
  get '/ar/status/:opt' do |n|
    "Status: #{n}"
  end    
  
  #temperatura
  get '/ar/temp/:opt' do |n|
    "Temperatura: #{n}"
  end  
  
  #ações como swing, humidade e etc...
  get '/ar/action/:opt/:level' do
    opt = params[:opt]
	level = params[:level]
    "#{opt},#{level}"
  end
  
  #liga/desliga
  get '/lampada/status/:opt' do |n|
    "Status: #{n}"
  end
end
