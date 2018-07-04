var mongoose = require('mongoose')
var Schema = mongoose.Schema
var graphql = require('graphql')
var GraphQLObjectType = graphql.GraphQLObjectType
var GraphQLBoolean = graphql.GraphQLBoolean
var GraphQLID = graphql.GraphQLID
var GraphQLString = graphql.GraphQLString
var GraphQLList = graphql.GraphQLList
var GraphQLNonNull = graphql.GraphQLNonNull
var GraphQLSchema = graphql.GraphQLSchema

// Mongoose Schema definition
var JOBS = mongoose.model('Jobs', new Schema({
  jobId: mongoose.Schema.Types.ObjectId,
  jobTitle: String,
  jobDescription: String,
  skills: String,
  portfolio: String,
  status: String
}))

var USERS = mongoose.model('users', new Schema({
  id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  fileLocation: String
}))

var COMPOSE_URI_DEFAULT = 'mongodb://localhost:27017/jobPortal'
mongoose.connect(process.env.COMPOSE_URI || COMPOSE_URI_DEFAULT, function (error) {
  if (error) console.error(error)
  else console.log('mongo connected')
})
/** END */

var JobType = new GraphQLObjectType({
  name: 'jobs',
  fields: () => ({
    jobId: {
      type: GraphQLID,
      description: 'Job id'
    },
    jobTitle: {
      type: GraphQLString,
      description: 'Job title'
    },
    skills: {
      type: GraphQLString,
      description: 'Job Skills'
    },
	 jobDescription: {
      type: GraphQLString,
      description: 'Job Description'
    },
	 portfolio: {
      type: GraphQLString,
      description: 'Portfolio name'
    },
	 status: {
      type: GraphQLString,
      description: 'Job Status'
    }
  })
})

var promiseListAll = () => {
  return new Promise((resolve, reject) => {
    JOBS.find((err, jobs) => {
      if (err) reject(err)
      else resolve(jobs)
    })
  })
}

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    jobs: {
      type: new GraphQLList(JobType),
      resolve: () => {
        return promiseListAll()
      }
    }
  })
})

var MutationAdd = {
  type: JobType,
  description: 'Add a Job',
  args: {
    jobTitle: {
     name: 'Job title',
      type: new GraphQLNonNull(GraphQLString)
    },
    skills: {
	  name: 'Job Skills',
      type: new GraphQLNonNull(GraphQLString)     
    },
	 jobDescription: {
	  name: 'Job Description',
      type: new GraphQLNonNull(GraphQLString)  
    },
	 portfolio: {
      name: 'Portfolio name',
	  type: new GraphQLNonNull(GraphQLString)  
    },
	 status: {
	  name: 'Job Status',
	  type: new GraphQLNonNull(GraphQLString) 
    }
  },
  resolve: (root, args) => {
    var newJob = new JOBS({
      jobTitle: args.jobTitle,
      status: Open
    })
    newJob.jobId = newJob._id
    return new Promise((resolve, reject) => {
      newJob.save(function (err) {
        if (err) reject(err)
        else resolve(newJob)
      })
    })
  }
}

var MutationToggle = {
  type: JobType,
  description: 'Toggle the Job',
  args: {
    jobId: {
      name: 'Job Id',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      JOB.findById(args.jobId, (err, jobs) => {
        if (err) {
          reject(err)
          return
        }

        if (!jobs) {
          reject('Job NOT found')
          return
        } else {
          jobs.completed = !jobs.completed
          jobs.save((err) => {
            if (err) reject(err)
            else resolve(jobs)
          })
        }
      })
    })
  }
}

var MutationDestroy = {
  type: JobType,
  description: 'Destroy the Job',
  args: {
    jobId: {
      name: 'Job Id',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      JOB.findById(args.id, (err, jobs) => {
        if (err) {
          reject(err)
        } else if (!jobs) {
          reject('Job NOT found')
        } else {
          jobs.remove((err) => {
            if (err) reject(err)
            else resolve(jobs)
          })
        }
      })
    })
  }
}

var MutationClearCompleted = {
  type: new GraphQLList(JobType),
  description: 'Clear completed',
  resolve: () => {
    return new Promise((resolve, reject) => {
      JOB.find({completed: true}, (err, jobs) => {
        if (err) {
          reject(err)
        } else {
          JOB.remove({
            _id: {
              $in: jobs.map((jobs) => jobs._id)
            }
          }, (err) => {
            if (err) reject(err)
            else resolve(jobs)
          })
        }
      })
    })
  }
}

var MutationSave = {
  type: JobType,
  description: 'Edit a Job',
  args: {
    jobId: {
      name: 'Job Id',
      type: new GraphQLNonNull(GraphQLString)
    },
    jobTitle: {
     name: 'Job title',
      type: new GraphQLNonNull(GraphQLString)
    },
    skills: {
	  name: 'Job Skills',
      type: new GraphQLNonNull(GraphQLString)     
    },
	 jobDescription: {
	  name: 'Job Description',
      type: new GraphQLNonNull(GraphQLString)  
    },
	 portfolio: {
      name: 'Portfolio name',
	  type: new GraphQLNonNull(GraphQLString)  
    },
	 status: {
	  name: 'Job Status',
	  type: new GraphQLNonNull(GraphQLString) 
    }	
  },
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      JOB.findById(args.id, (err, jobs) => {
        if (err) {
          reject(err)
          return
        }

        if (!jobs) {
          reject('Job NOT found')
          return
        }

        jobs.jobTitle = args.jobTitle
		jobs.skills = args.skills
		jobs.jobDescription = args.jobDescription
		jobs.portfolio = args.portfolio
		jobs.status = args.status
				
        jobs.save((err) => {
          if (err) reject(err)
          else resolve(jobs)
        })
      })
    })
  }
}

var MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: MutationAdd,
    toggle: MutationToggle,
    destroy: MutationDestroy,
    clearCompleted: MutationClearCompleted,
    save: MutationSave
  }
})

var UserType = new GraphQLObjectType({
  name: 'users',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'User id'
    },
    firstName: {
      type: GraphQLString,
      description: 'First Name'
    },
    lastName: {
      type: GraphQLString,
      description: 'Last Name'
    },
	 email: {
      type: GraphQLString,
      description: 'Email'
    },
	 role: {
      type: GraphQLString,
      description: 'role name'
    },
	 fileLocation: {
      type: GraphQLString,
      description: 'File Status'
    }
  })
})

var userListAll = () => {
  return new Promise((resolve, reject) => {
    USERS.find((err, users) => {
      if (err) reject(err)
      else resolve(users)
    })
  })
}

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return userListAll()
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})
