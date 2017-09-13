

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4,10],
          msg: 'tile must start with a letter and be at least 3 characters.'
        },
        is: {
          args: /^[a-zA-Z_ ]*$/,
          msg: 'only alphabets are allowed for the title'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10, 250],
          msg: 'description must be atleast 10 characters'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 15],
          msg: 'category must be atleast 5 characters'
        },
        is: {
          args: /^[A-Za-z][A-Za-z]+$/i,
          msg: 'category must start with a letter, have no spaces,and be 5 - 15 characters.'
        }
      }
    },
    userId: DataTypes.INTEGER,
    image: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    instructions: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    upvote: DataTypes.INTEGER,
    downvote: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    favUser: DataTypes.ARRAY(DataTypes.STRING),
  });

  Recipe.associate = (models) => {
    Recipe.hasMany(models.Comment, {
      foreignKey: 'recipeId',
      as: 'comments',
    });

    Recipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Recipe.hasMany(models.Favorite, {
      foreignKey: 'recipeId',
      as: 'check',
    });

    // Recipe.hasMany(models.Favorite, {
    //   foreignKey: 'recipeId',
    //   as:'check'
    // })
  };


  return Recipe;
};
