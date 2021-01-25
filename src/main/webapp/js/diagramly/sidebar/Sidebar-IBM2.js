(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		const dt = 'ibm mondrian ';
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

		// Format dictionaries
		const ACTOR_FORMAT = {type: MBS.SHAPE_TYPE.ACTOR, layout: MBS.SHAPE_LAYOUT.EXPANDED, multiplicity: false, textPosition: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const GROUP_FORMAT = {type: MBS.SHAPE_TYPE.GROUP, layout: MBS.SHAPE_LAYOUT.EXPANDED, multiplicity: false, textPosition: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const GROUP_FORMAT_NOCONTAINER = {type: MBS.SHAPE_TYPE.GROUP, layout: MBS.SHAPE_LAYOUT.EXPANDED, multiplicity: false, textPosition: null, container: MBS.SHAPE_CONTAINER.NO_TRANSPARENT};
		const LOGICAL_FORMAT = {type: MBS.SHAPE_TYPE.LOGICAL_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, multiplicity: false, textPosition: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const LOGICAL_FORMAT_MULTIPLICITY = {type: MBS.SHAPE_TYPE.LOGICAL_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, multiplicity: true, textPosition: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const PRESCRIBED_TYPE = {format: MBS.SHAPE_TYPE.PRESCRIBED_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, multiplicity: false, textPosition: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};
		const PRESCRIBED_TYPE_MULTIPLICITY = {format: MBS.SHAPE_TYPE.PRESCRIBED_NODE, layout: MBS.SHAPE_LAYOUT.COLLAPSED, multiplicity: true, textPosition: null, container: MBS.SHAPE_CONTAINER.YES_TRANSPARENT};

		// Color dictionaries
		const ACCOUNT_COLOR = {family: MBS.COLOR_FAMILY.GRAY, fillIcon: null, fillText: null, fillContainer: null};
		const APPLICATIONS_COLOR = {family: MBS.COLOR_FAMILY.PURPLE, fillIcon: null, fillText: null, fillContainer: null};
		const COMPUTE_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const DATA_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const KUBE_COLOR = {family: MBS.COLOR_FAMILY.TEAL, fillIcon: null, fillText: null, fillContainer: null};
		const MANAGEMENT_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const NETWORK_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const SECURITY_COLOR = {family: MBS.COLOR_FAMILY.RED, fillIcon: null, fillText: null, fillContainer: null};
		const STORAGE_COLOR = {family: MBS.COLOR_FAMILY.BLUE, fillIcon: null, fillText: null, fillContainer: null};
		const USER_COLOR = {family: MBS.COLOR_FAMILY.BLACK, fillIcon: null, fillText: null, fillContainer: null};
		const VPC_COLOR = {family: MBS.COLOR_FAMILY.GREEN, fillIcon: null, fillText: null, fillContainer: null};

		// Stencil dictionaries
		const stencils = {
		   'Groups': { 
			'IBM Cloud': {icon: 'ibm-cloud', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Region': {icon: 'flag', format: GROUP_FORMAT, color: ACCOUNT_COLOR},
			'Region Alt': {icon: 'location', format: GROUP_FORMAT, color: ACCOUNT_COLOR},
			'Zone': {icon: 'data--base--alt', format: GROUP_FORMAT, color: ACCOUNT_COLOR},
			'Cloud Services': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Classic Infrastructure': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Account': {icon: 'user', format: GROUP_FORMAT, color: ACCOUNT_COLOR},
			'Access Group': {icon: 'credentials', format: GROUP_FORMAT, color: ACCOUNT_COLOR},
			'Resource Group': {icon: 'collaborate', format: GROUP_FORMAT, color: ACCOUNT_COLOR},

			'VPC': {icon: 'virtual-private-cloud', format: GROUP_FORMAT, color: VPC_COLOR},
			'Subnet:ACL': {icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR},
			'Virtual Server': {icon: 'virtual-machine', format: GROUP_FORMAT, color: VPC_COLOR},
			'Instance Group': {icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR},
			'Physical Server': {icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR},
			'Endpoints': {icon: 'default', format: GROUP_FORMAT, color: VPC_COLOR},
			'Security Group': {icon: 'security', format: GROUP_FORMAT_NOCONTAINER, color: SECURITY_COLOR},

			'Kubernetes Cluster': {icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR},
			'OpenShift Cluster': {icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR},
			'Kubernetes Service': {icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR},
			'Kubernetes Replica Set': {icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR},
			'Kubernetes Pod': {icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR},
			'Kubernetes Namespace': {icon: 'default', format: GROUP_FORMAT, color: KUBE_COLOR},

			'Public Network': {icon: 'events', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Enterprise Network': {icon: 'enterprise', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Cloud Foundry': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Data Center': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Point of Presence': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'Overlay Network': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
			'VLAN': {icon: 'default', format: GROUP_FORMAT, color: NETWORK_COLOR},
		},

		'Compute': {
			'Virtual Server': {icon: 'virtual-machine', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
			'Instance Group': {icon: 'default', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
		},

		'Compute Devices': {
			'Physical Server': {icon: 'archive', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
			'Mobile Device': {icon: 'mobile', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
			'Tablet Device': {icon: 'tablet', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
			'Laptop Device': {icon: 'laptop', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
			'Desktop Computer': {icon: 'devices', format: LOGICAL_FORMAT, color: COMPUTE_COLOR},
		},

		'Network': {
			'Floating IP': {icon: 'connect', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
			'Transit Gateway': {icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
			'Endpoints': {icon: 'default', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
		},

		'Network Devices': {
			'Application Load Balancer': {icon: 'parent-child', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
			'Network Load Balancer': {icon: 'parent-child', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
			'Public Gateway': {icon: 'network--2', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
			'Edge Node': {icon: 'edge-node', format: LOGICAL_FORMAT, color: NETWORK_COLOR},
		},

		'Security': {
			'VPN': {icon: 'VPN', format: LOGICAL_FORMAT, color: SECURITY_COLOR},
			'VPN Policy': {icon: 'policy', format: LOGICAL_FORMAT, color: SECURITY_COLOR},
			'Identity and Access Manager': {icon: 'fingerprint-recognition', format: LOGICAL_FORMAT, color: SECURITY_COLOR},
			'Credentials': {icon: 'credentials', format: LOGICAL_FORMAT, color: SECURITY_COLOR},
			'Rule': {icon: 'rule', format: LOGICAL_FORMAT, color: SECURITY_COLOR},
		},

		'Security Devices': {
			'VPN Gateway': {icon: 'default', format: LOGICAL_FORMAT, color: SECURITY_COLOR},
		},

		'Storage': {
			'Object Storage Accessor': {icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR},
			'Object Storage Slicestor': {icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR},
		},

		'Storage Devices': {
			'Block Storage': {icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR},
			'File Storage': {icon: 'default', format: LOGICAL_FORMAT, color: STORAGE_COLOR},
			'Object Storage': {icon: 'object-storage', format: LOGICAL_FORMAT, color: STORAGE_COLOR},
		},

		'Users': {
			'User': {icon: 'user', format: ACTOR_FORMAT, color: USER_COLOR},
			'Users': {icon: 'group', format: ACTOR_FORMAT, color: USER_COLOR},
			'Events': {icon: 'events', format: ACTOR_FORMAT, color: USER_COLOR},
			'Collaborate': {icon: 'collaborate', format: ACTOR_FORMAT, color: USER_COLOR},
			'Web Browser': {icon: 'terminal', format: ACTOR_FORMAT, color: USER_COLOR},
		   },
		};

		for (let section in stencils) {
			const shapes = stencils[section];
			var entries = [];

			for (let name in shapes) {
				entries.push(this.addEntry(dt + name.toLowerCase(), function() {
					const shape = shapes[name];
					var styleFont = '';
					var extraStyle = '';
					var shapeId = '';

					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shape.format.type, shape.format.layout, shape.color.family, shape.format.container, styleFont, extraStyle, shapeId, name, shape.icon);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
				}))
			}
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + section)
			this.addPaletteFunctions('ibm2' + section, 'IBM 2.0 / ' + section, false, entries);
		}

		this.setCurrentSearchEntryLibrary();
	};
})();
