let id = parseInt(window.localStorage.getItem('idMax') || '1');
const createID = (): number => {
	id += 1;
	window.localStorage.setItem('idMax', JSON.stringify(id));
	return id;
};

export {createID};
