Create a conda environment and install node.js v6 and git
- M1 macs
```bash
CONDA_SUBDIR=osx-64 conda create -n node6 python
conda activate node6
conda env config vars set CONDA_SUBDIR=osx-64
conda deactivate node6
conda activate node6
```

- Other platform
```bash
# omit git if it's already installed globally
conda create -n node6 -c conda-forge nodejs=6 git
conda activate node6
```

Clone repo from github and change directory into `./symposium-2023/client`
```bash
git clone https://github.com/btbatw/symposium-2023.git
cd symposium-2023/client
npm install
npm install -g @angular/cli@1.3.2
```

Serve locally during development
```bash
# in .../symposium-2023/client directory
ng serve
```

Build for production
```bash
# set --base-href based on the site structure
# in the following example, the symposium site lives under
# https://main-site.org/2020

# in .../symposium-2023/client directory
ng build --prod --output-path 2023  --base-href /2023/

# for local repo freshedly cloned and has submodule
git submodule update --init
```

Use github pages to serve the `website` branch

1. create `website` branch on github
2. configure github pages pointing to root of the `website` branch
```bash
# in .../tba-symposium/client directory
git submodule add -b website https://github.com/btbatw/symposium-2023.git website
ng build --prod --output-path website  --base-href /2023/


# make changes and update submodule and main git repo by referencing to
# https://www.activestate.com/blog/getting-git-submodule-track-branch/
```
