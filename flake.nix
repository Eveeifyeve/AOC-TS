{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs@{ nixpkgs, flake-parts, ... }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = nixpkgs.lib.systems.flakeExposed;
      perSystem = {
        lib,
        pkgs,
        system,
        config,
        ...
      }:
      let 
      inherit (pkgs.darwin.apple_sdk.frameworks) SystemConfiguration;
      in
      {
        devShells.default = pkgs.mkShell
        {
        # Rust 

        #   packages = with pkgs; [
        #     openssl
        #     rust-analyzer
        #     rustc
		# 	bacon 
        #     cargo
        #     clippy
        #     rustfmt
	    #     libiconv
        # ] ++ lib.optionals stdenv.isDarwin [
	    #     apple-sdk_11
	    # ];
        # RUST_SRC_PATH = "${pkgs.rustPlatform.rustLibSrc}";

        # Nix

        # packages = with pkgs; [
        #     nixfmt-rfc-style
        # ];
        };
      };
    };
}