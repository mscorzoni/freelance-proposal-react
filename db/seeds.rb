10.times do |d|
  FreelanceDocument.create!(
    title: "Document #{d}",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/edit?usp=sharing",
    image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
  )
end

10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://mscorzoni-portfolio.herokuapp.com',
    tools: 'Ruby on Rails, Angular 6 and Postgresql',
    estimated_hours: (80 + proposal),
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'test@test.com'
    )
end

Proposal.create!(
    customer: "Google",
    portfolio_url: 'http://mscorzoni-portfolio.herokuapp.com',
    tools: 'Ruby on Rails, Angular 6 and Postgresql',
    estimated_hours: 120,
    hourly_rate: 120,
    weeks_to_complete: 12,
    client_email: 'test@test.com'
    )