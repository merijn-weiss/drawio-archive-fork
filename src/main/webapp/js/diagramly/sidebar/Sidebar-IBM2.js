(function()
{
	Sidebar.prototype.addIBM2Palette = function()
	{
		const dt = 'ibm mondrian ';
		const MBS = Sidebar.prototype.IBM2MondrianBaseShape;

		const ACTOR = MBS.SHAPE_TYPE.ACTOR;
		const GROUP = MBS.SHAPE_TYPE.GROUP;
		const LOGICAL_NODE = MBS.SHAPE_TYPE.LOGICAL_NODE;
		const PRESCRIBED_NODE = MBS.SHAPE_TYPE.PRESCRIBED_NODE;

		const CONTAINER = MBS.SHAPE_CONTAINER.YES_TRANSPARENT;
		const NO_CONTAINER = MBS.SHAPE_CONTAINER.NO_TRANSPARENT;

		const COLLAPSED = MBS.SHAPE_LAYOUT.COLLAPSED;
		const EXPANDED = MBS.SHAPE_LAYOUT.EXPANDED;

		const FILL_ICON_NONE = 'none';
		const FILL_ICON_LIGHT = 'none';
		const FILL_ICON_MEDIUM = 'none';
		const FILL_ICON_DARK = 'none';

		const FILL_CONTAINER_NONE = 'none';
		const FILL_CONTAINER_WHITE = 'none';
		const FILL_CONTAINER_LIGHT = 'none';

		const FILL_TEXT_NONE = 'none';
		const FILL_TEXT_WHITE = 'none';
		const FILL_TEXT_LIGHT = 'none';

		const ACCOUNT_COLOR = MBS.COLOR_FAMILY.GRAY;
		const COMPUTE_COLOR = MBS.COLOR_FAMILY.BLUE;
		const KUBE_COLOR = MBS.COLOR_FAMILY.TEAL;
		const NETWORK_COLOR = MBS.COLOR_FAMILY.BLUE;
		const SECURITY_COLOR = MBS.COLOR_FAMILY.RED;
		const STORAGE_COLOR = MBS.COLOR_FAMILY.BLUE;
		const USER_COLOR = MBS.COLOR_FAMILY.BLACK;
		const VPC_COLOR = MBS.COLOR_FAMILY.GREEN;

		const stencils = {
		   'Groups': { 
			'IBM Cloud': {icon: 'ibm-cloud', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Region': {icon: 'flag', type: GROUP, color: {family: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Region Alt': {icon: 'location', type: GROUP, color: {family: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Zone': {icon: 'data--base--alt', type: GROUP, color: {family: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Cloud Services': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Classic Infrastructure': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Account': {icon: 'user', type: GROUP, color: {family: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Access Group': {icon: 'credentials', type: GROUP, color: {family: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Resource Group': {icon: 'collaborate', type: GROUP, color: {family: ACCOUNT_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},

			'VPC': {icon: 'virtual-private-cloud', type: GROUP, color: {family: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Subnet:ACL': {icon: 'default', type: GROUP, color: {family: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Virtual Server': {icon: 'virtual-machine', type: GROUP, color: {family: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Instance Group': {icon: 'default', type: GROUP, color: {family: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Physical Server': {icon: 'default', type: GROUP, color: {family: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Endpoints': {icon: 'default', type: GROUP, color: {family: VPC_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Security Group': {icon: 'security', type: GROUP, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: NO_CONTAINER}},

			'Kubernetes Cluster': {icon: 'default', type: GROUP, color: {family: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'OpenShift Cluster': {icon: 'default', type: GROUP, color: {family: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Kubernetes Service': {icon: 'default', type: GROUP, color: {family: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Kubernetes Replica Set': {icon: 'default', type: GROUP, color: {family: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Kubernetes Pod': {icon: 'default', type: GROUP, color: {family: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Kubernetes Namespace': {icon: 'default', type: GROUP, color: {family: KUBE_GROUP_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},

			'Public Network': {icon: 'events', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Enterprise Network': {icon: 'enterprise', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Cloud Foundry': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Data Center': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Point of Presence': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'Overlay Network': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
			'VLAN': {icon: 'default', type: GROUP, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: EXPANDED, multiplicity: false, container: CONTAINER}},
		},

		'Compute': {
			'Virtual Server': {icon: 'virtual-machine', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Instance Group': {icon: 'default', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Compute Devices': {
			'Physical Server': {icon: 'archive', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Mobile Device': {icon: 'mobile', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Tablet Device': {icon: 'tablet', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Laptop Device': {icon: 'laptop', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Desktop Computer': {icon: 'devices', type: LOGICAL_NODE, color: {family: COMPUTE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Network': {
			'Floating IP': {icon: 'connect', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Transit Gateway': {icon: 'default', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Endpoints': {icon: 'default', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Network Devices': {
			'Application Load Balancer': {icon: 'parent-child', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Network Load Balancer': {icon: 'parent-child', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Public Gateway': {icon: 'network--2', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Edge Node': {icon: 'edge-node', type: LOGICAL_NODE, color: {family: NETWORK_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Security': {
			'VPN': {icon: 'VPN', type: LOGICAL_NODE, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'VPN Policy': {icon: 'policy', type: LOGICAL_NODE, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Identity and Access Manager': {icon: 'fingerprint-recognition', type: LOGICAL_NODE, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Credentials': {icon: 'credentials', type: LOGICAL_NODE, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Rule': {icon: 'rule', type: LOGICAL_NODE, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Security Devices': {
			'VPN Gateway': {icon: 'default', type: LOGICAL_NODE, color: {family: SECURITY_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Storage': {
			'Object Storage Accessor': {icon: 'default', type: LOGICAL_NODE, color: {family: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Object Storage Slicestor': {icon: 'default', type: LOGICAL_NODE, color: {family: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Storage Devices': {
			'Block Storage': {icon: 'default', type: LOGICAL_NODE, color: {family: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'File Storage': {icon: 'default', type: LOGICAL_NODE, color: {family: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Object Storage': {icon: 'object-storage', type: LOGICAL_NODE, color: {family: STORAGE_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
		},

		'Users': {
			'User': {icon: 'user', type: ACTOR, color: {family: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Users': {icon: 'group', type: ACTOR, color: {family: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Events': {icon: 'events', type: ACTOR, color: {family: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Collaborate': {icon: 'collaborate', type: ACTOR, color: {family: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
			'Web Browser': {icon: 'terminal', type: ACTOR, color: {family: USER_COLOR, fillIcon: FILL_ICON_MEDIUM, fillText: FILL_TEXT_NONE, fillContainer: FILL_CONTAINER_NONE}, format: {layout: COLLAPSED, multiplicity: false, container: CONTAINER}},
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

					var bg = Sidebar.prototype.addIBM2MondrianVertexTemplateFactory(shape.type, shape.format.layout, shape.color.family, shape.format.container, styleFont, extraStyle, shapeId, name, shape.icon);
   					return sb.createVertexTemplateFromCells([bg], bg.geometry.width, bg.geometry.height, name);
				}))
			}
			this.setCurrentSearchEntryLibrary('ibm2', 'ibm2' + section)
			this.addPaletteFunctions('ibm2' + section, 'IBM 2.0 / ' + section, false, entries);
		}

		this.setCurrentSearchEntryLibrary();
	};
})();
