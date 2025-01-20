require "rails_helper"

RSpec.describe "Viewing the home page" do
  before { visit root_path }

  it 'displays the app name' do
    expect(page).to have_text("Housekeeper")
  end
end
