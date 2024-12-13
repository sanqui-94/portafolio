class Api::V1::StrategiesController < ApplicationController
  before_action :set_strategy, only: [:show, :destroy]

  def index
    strategies = Strategy.all
    render json: strategies
  end

  def create
    strategy = Strategy.create!(strategy_params)
    if strategy
      render json: strategy
    else
      render json: strategy.errors
    end
  end

  def show
    render json: @strategy
  end

  def destroy
    @strategy&.destroy
    render json: { message: 'Strategy deleted!' }
  end

  private
  def strategy_params
    params.permit(:description)
  end

  def set_strategy
    @strategy = Strategy.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to api_v1_strategies_index_url, alert: 'Strategy not found'
  end
end
