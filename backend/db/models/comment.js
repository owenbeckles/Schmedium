'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    storyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Stories' }
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Story, { foreignKey: 'storyId'});
    Comment.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Comment;
};