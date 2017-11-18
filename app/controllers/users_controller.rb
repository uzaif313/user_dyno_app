class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
    @user = User.new
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
     duplicate = []
     params['users'].each do |user|
      user_params=params["users"][user]["user"].permit(:name, :email, :mobile)
      user_check = check_for_existing_user(user_params[:email],user_params[:mobile])  
      if user_check.present?
        duplicate << user_check
      else
        user = User.new(user_params) 
        user.save     
      end
     end
     respond_to do |format|
       format.json {render json:{error:{duplicate:duplicate,count:duplicate.count}}}
       format.js
     end
  end


  def check_for_existing_user(email,mobile)
    User.where(email:email,mobile:mobile)&.first
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :mobile, :email, :image)
    end

    def users_params
      params.require(:users).permit([user:[:name,:email,:mobile]])
    end
end
