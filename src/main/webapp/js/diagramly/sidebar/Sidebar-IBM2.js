(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		const dt = 'ibm mondrian ';
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

		const stencils = {
		'Groups': { 
			'Cloud Groups':
				{'iconName': 'ibm-cloud',
				 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'IBM Cloud':
				{'iconName': 'ibm-cloud',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Region':
				{'iconName': 'flag',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Region Alt':
				{'iconName': 'location',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Zone':
				{'iconName': 'data--base--alt',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Cloud Services':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Classic Infrastructure':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Account':
				{'iconName': 'user',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Access Group':
				{'iconName': 'credentials',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Resource Group':
				{'iconName': 'collaborate',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},

			'VPC Groups':
				{'iconName': 'virtual-private-cloud',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'VPC':
				{'iconName': 'virtual-private-cloud',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Subnet:ACL':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Virtual Server':
				{'iconName': 'virtual-machine',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Instance Group':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Physical Server':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Endpoints':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Security Group':
				{'iconName': 'security',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},

			'Kubernetes Groups':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Kubernetes Cluster':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'OpenShift Cluster':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Kubernetes Service':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.PURPLE,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Kubernetes Replica Set':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.PURPLE,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Kubernetes Pod':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.PURPLE,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Kubernetes Namespace':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.PURPLE,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},

			'Network Groups':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
				 'shapeColor': MBS.COLOR_FAMILY.GRAY, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Public Network':
				{'iconName': 'events',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Enterprise Network':
				{'iconName': 'enterprise',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Cloud Foundry':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Data Center':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Point of Presence':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Overlay Network':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'VLAN':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.GROUP,
			 	 'shapeColor': MBS.COLOR_FAMILY.GREEN,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.EXPANDED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Compute': {
			'Virtual Server':
				{'iconName': 'virtual-machine',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Instance Group':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Compute Devices': {
			'Physical Server':
				{'iconName': 'archive',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Mobile Device':
				{'iconName': 'mobile',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Tablet Device':
				{'iconName': 'tablet',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Laptop Device':
				{'iconName': 'laptop',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Desktop Computer':
				{'iconName': 'devices',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Network': {
			'Floating IP':
				{'iconName': 'connect',
				 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Transit Gateway':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Endpoints':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Network Devices': {
			'Application Load Balancer':
				{'iconName': 'parent-child',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Network Load Balancer':
				{'iconName': 'parent-child',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Public Gateway':
				{'iconName': 'network--2',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Edge Node':
				{'iconName': 'edge-node',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Security': {
			'VPN':
				{'iconName': 'VPN',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'VPN Policy':
				{'iconName': 'policy',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Identity and Access Manager':
				{'iconName': 'fingerprint-recognition',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Credentials':
				{'iconName': 'credentials',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Rule':
				{'iconName': 'rule',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Security Devices': {
			'VPN Gateway':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.RED, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Storage': {
			'Object Storage Accessor':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Object Storage Slicestor':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Storage Devices': {
			'Block Storage':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'File Storage':
				{'iconName': 'default',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Object Storage':
				{'iconName': 'object-storage',
			 	 'shapeType': MBS.SHAPE_TYPE.LOGICAL_NODE,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLUE, 
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},

		'Users': {
			'User':
				{'iconName': 'user',
			 	 'shapeType': MBS.SHAPE_TYPE.ACTOR,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLACK,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Users':
				{'iconName': 'group',
			 	 'shapeType': MBS.SHAPE_TYPE.ACTOR,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLACK,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Events':
				{'iconName': 'events',
			 	 'shapeType': MBS.SHAPE_TYPE.ACTOR,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLACK,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Collaborate':
				{'iconName': 'collaborate',
			 	 'shapeType': MBS.SHAPE_TYPE.ACTOR,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLACK,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
			'Web Browser':
				{'iconName': 'terminal',
			  	 'shapeType': MBS.SHAPE_TYPE.ACTOR,
			 	 'shapeColor': MBS.COLOR_FAMILY.BLACK,
			 	 'shapeLayout': MBS.SHAPE_LAYOUT.COLLAPSED,
			 	 'shapeContainer': MBS.SHAPE_CONTAINER.YES_TRANSPARENT},
		},
		};

		for (let sectionName in stencils) {
			var entries = [];
			var shapes = stencils[sectionName];

			for (let shapeName in shapes) {
				entries.push(this.addEntry(dt + shapeName.toLowerCase(), function() {
					var styleFont = '';
					var extraStyle = '';
					var shapeId = '';

					var shape = shapes[shapeName];

					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shape['shapeType'], shape['shapeLayout'], shape['shapeColor'], shape['shapeContainer'], styleFont, extraStyle, shapeId, shapeName, shape['iconName']);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, shapeName);
				}))
			}
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + sectionName)
			this.addPaletteFunctions('ibm2' + sectionName, 'IBM 2.0 / ' + sectionName, false, entries);
		}

		this.setCurrentSearchEntryLibrary();
	};
})();
