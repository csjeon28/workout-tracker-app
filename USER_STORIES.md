## User Stories

### User Model
- User can sign up
- User can login/logout
* has_many :workouts
* has_many :exercises
#### Stretch Goals
- User can add profile
- User can edit profile
- User can delete profile
- User can view profile


### Workout Model
- User can enter the date
- User can input weight
- User can view all exercises per date
* belongs_to :user
* has_many :exercises
#### Stretch Goals 
- User can view the week and click into each date to view


### Exercise Model
- User can add exercise
- User can edit exercise
- User can delete exercise
- User can view exercise
- User can add calories
* belongs_to :user
* belongs_to :workout