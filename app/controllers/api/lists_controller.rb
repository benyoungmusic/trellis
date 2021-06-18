class Api::ListsController < ApplicationController

    def create
        @list = List.new(list_params)
        @list.author_id = current_user.id
        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def show
        @list = List.find_by(id: params[:id])
        if @list
            render :show
        else
            render json: @list.errors.full_messages, status: 404
        end
    end

    def index
        @lists = List.where(board_id: params[:board_id])
        render :index
    end

    def update
        @list = List.find_by(id: params[:id])
        if @list.update(list_params)
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @list = List.find_by(id: params[:id])
        if @list.destroy
            render :index
        else
            render json: ["List does not exist"]
        end
    end


    private

    def list_params
        params.require(:list).permit(:title, :author_id, :board_id, :board_pos)
    end
end
