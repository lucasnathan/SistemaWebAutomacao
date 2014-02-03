require 'sinatra/base'
$stdout.sync = true

class App < Sinatra::Base
  use Rack::CommonLogger
  
  set :root, File.dirname(__FILE__)
  set :public_folder, Proc.new { File.join(root, "app") } 
  set :views, Proc.new { File.join(root, "views") }

  get '/' do
	# File.read(File.join('public', 'index.html'))
	html :index
  end
  
  get '/favicon.ico' do
	File.read(File.join('app', 'favicon.ico'))
  end
  
  def html(view)
	File.read(File.join('app',"#{view.to_s}.html"))
  end
end