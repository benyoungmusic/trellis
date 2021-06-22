class Api::CardsController < ApplicationController

  def create
    @card = Card.new(card_params)
    @card.author_id = current_user.id
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def show
    @card = Card.find_by(id: params[:id])
    if @card
      render :show
    else
      render json: @card.errors.full_messages, status: 404
    end
  end

  def index
    # debugger
    @cards = Card.where(board_id: params[:board_id])
    render :index
  end

  def update
    @card = Card.find_by(id: params[:id])
    if @card.update(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = Card.find_by(id: params[:id])
    if @card.destroy
      render :index
    else
      render json: ["Card does not exist"]
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :author_id, :board_id, :list_id, :list_pos, :description)
  end
end
