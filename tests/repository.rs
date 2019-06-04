mod repository {

    use portage_repo::Repository;

    #[test]
    fn new() {
        let r = Repository::new("");
        let _p = r.path();
    }

}
