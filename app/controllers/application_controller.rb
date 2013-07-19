class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  layout false

  protect_from_forgery with: :exception

  before_filter :intercept_html_requests

  private
  def intercept_html_requests
    render('angular_template') if request.format.html?
  end
end
