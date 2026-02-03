const EditorialBanner = () => {
    return (
        <div className="w-full bg-primary">
            <div className="p-5 lg:px-[120px] sm:px-[70px] sm:py-16">
                <div className="w-full sm:flex-row flex-col flex ">
                    <div className="flex flex-col order-last sm:order-none sm:w-3/4">
                        <p className={`text-green-3 sm:text-xl text-base sm:pt-5 pt-3 `}>
                            Breaking new ground to transform the industry.
                        </p>
                        <p className="sm:text-[72px] text-[35px]  sm:leading-[74px] leading-[40px] text-green-1">
                            Stories, strategies, & systems
                            behind digital products.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EditorialBanner;
