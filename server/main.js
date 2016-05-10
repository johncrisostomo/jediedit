	Meteor.startup(function(){
		if (!Documents.findOne()) {
			Documents.insert({title:"no one owns this", isPrivate:false});
		}
	});

	Meteor.publish('documents', function() {
		return Documents.find({
			$or: [
				{isPrivate:{$ne: true}},
				{owner: this.userId}
			]
		});
	});

	Meteor.publish('editingUsers', function() {
		return EditingUsers.find({});
	});
