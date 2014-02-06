require 'sinatra/base'
require 'net/http'
require 'uri'
require 'yaml'

$stdout.sync = true

class App < Sinatra::Base
	use Rack::CommonLogger
	
	set :root, File.dirname(__FILE__)
	set :public_folder, Proc.new { File.join(root, "app") } 
	set :views, Proc.new { File.join(root, "views") }
	
	#configuration file....
	CONFIG = YAML::load(File.open('config.yml'))
	
	#server URL that comes from the CONFIG variable, such has all settings and configs...
	uri = URI.parse(CONFIG['host'])
	puts uri
	
	#route the main path '/' and render index.html page...
	get '/' do
		html :index
	end

	#render the '404.html' when some page is not found in the project...
	not_found do
		html :'404'
	end

	#render an page in the param...
	def html(view)
		File.read(File.join('app',"#{view.to_s}.html"))
	end
	
	#dinamically URL's it the best way in this case, cause we have a lot of 
	#request and routes...
	get '/:action' do
		sendRequest(uri + '/'+ params[:action])
	end
	
	private
		def sendRequest(path)
			Net::HTTP.get_print(path)
		end
	
end