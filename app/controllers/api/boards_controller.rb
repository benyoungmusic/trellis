class Api::BoardsController < ApplicationController

    def create
        @board = Board.new(board_params)
        @board.author_id = current_user.id
        if @board.save
            render :index
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def show
        @board = Board.find_by(id: params[:id])
        if @board
            render :show
        else
            render json: @board.errors.full_messages, status: 404
        end
    end

    def index
        @boards = Board.where(author_id: params[:user_id])
        render :index
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @chirp.destroy
            render :show
        else
            render json: ["Board does not exist"]
        end
    end

    private

    def board_params
        params.require(:board).permit(:title, :author_id)
    end
end
